var db;

this.addEventListener('install', function(evt) {
  evt.waitUntil(this.skipWaiting());
});

this.addEventListener('fetch', function(event) {
  event.respondWith(openDB().then(function(){
    var path = event.request.url.split('/')[3];
    if(path === 'save' && event.request.method === 'POST') {
      return event.request.text().then(function(data){
        return saveData('intentions', data).then(function() {

          db.close();
          db = null;
          return new Response({status: 200});
        });
      });
    } else if(path === 'getintentions' && event.request.method === 'GET') {
      return getData('intentions').then(function(intentions){
        return new Response(JSON.stringify(intentions),{status: 200});
      });
    } else if(path === 'intention' && event.request.method === 'DELETE') {
      var id = event.request.url.split('/')[4];
      return deleteData('intentions', id).then(function() {
        db.close();
        db = null;
        return new Response({status: 200});
      }, function() {
        return new Response({status: 500});
      });
    } else {
      return fetch(event.request);
    }
  }));
});

var openDB = function() {
  return new Promise(function(resolve, reject) {
    if(db) {
      resolve();
    } else {
      var openRequest = indexedDB.open('nudge', 2);

      openRequest.onsuccess = function(evt) {
        db = evt.target.result;
        resolve();
      };
      openRequest.onerror = function(evt) {
        reject();
      };

      openRequest.onupgradeneeded = function(evt) {
        console.log('upgrade');
        db = evt.target.result;
        db.createObjectStore('intentions', {autoIncrement: true});
      };
      openRequest.onblocked = function(evt) {
        console.log('blocked');
      };
    }
  });
}

var saveData = function(objectStore, data) {
  return new Promise(function(resolve, reject) {
    var t = db.transaction([objectStore], 'readwrite');
    t.oncomplete = function() {
      resolve();
    };
    t.onerror = function() {
      reject();
    }
    t.objectStore(objectStore).add(data);
  });
};

var getData = function(objectStore) {
  return new Promise(function(resolve, reject) {
    var data = [];
    var t = db.transaction([objectStore]);
    var req = t.objectStore(objectStore);

    var result = req.openCursor();
    result.onsuccess = function(event) {
      var cursor = event.target.result;
      if(cursor) {
        data.push({key: cursor.key, value: cursor.value});
        cursor.continue();
      } else {
        resolve(data);
      }
    };
    result.onerror = function() {
      reject();
    };
  });
};

var deleteData = function(objectStore, id) {
  return new Promise(function(resolve, reject) {
      var t = db.transaction([objectStore], 'readwrite').objectStore(objectStore);
      var del = t.delete(parseInt(id));
      del.onsuccess = function() {
        resolve();
      };
      del.onerror = function() {
        reject();
      }
  });
}
