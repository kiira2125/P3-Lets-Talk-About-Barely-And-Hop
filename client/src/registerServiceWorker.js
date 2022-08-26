const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP}) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
    });
  }
};

// export default reportWebVitals;

const isLocalHost = Boolean(
  window.location.hostname === 'localhost' ||
    window.location.hostname === '[::1]' ||
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);

export default function register(){
  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator){
    const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
    if (publicUrl.origin !== window.location.origin) {
      return;
    }
    window.addEventListener('load', () => {
      const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;
      if (isLocalHost) {
        checkValidServiceWorker(swUrl);
      } else {
        registerValidSW(swUrl);
      }
    });
  }
}

function registerValidSW(swURL){
  navigator.serviceWorker
    .register(swURL)
    .then(registration => {
      registration.onupdatefound = () => {
        const installingWorker = registration.installing;
        installingWorker.onstatechange = () =>{
          if (installingWorker.state === 'installed'){
            if (navigator.serviceWorker.controller){
              console.log('New content is available now ;).');
            } else {
              console.log('This content is cached for offline usage ~_o.');
            }
          }
        };
      };

    })
    
    .catch(error =>{
      console.error('We are sorry, there is an error during the service worker registration', error);
    });
}

function checkValidServiceWorker(swURL){
  fetch(swURL).then(response => {
    if(response.status ===404||
      response.headers.get('content-type').indexOF('javascript') === -1
      ){
        navigator.serviceWorker.ready.then(registration =>{
          registration.unregister().then(() =>{
            window.location.reload();
        });
        });
      } else{
        registerValidSW(swURL);
      }
    })
    .catch(() => {
      console.log('No internet connection is detected. The APP will run offline mode');
    });
}

export function unregister(){
  if ('serviceWorker' in navigator){
    navigator.serviceWorker.ready.then(registration =>{
      registration.unregister();
  });
 }
};
