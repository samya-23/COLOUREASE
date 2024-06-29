document.getElementById('enhanceColors').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: enhanceColors,
      });
    });
  });
  
  function enhanceColors() {
    const styles = `
      body {
        filter: contrast(120%);
      }
      * {
        border: 1px solid transparent;
      }
    `;
    const styleSheet = document.createElement('style');
    styleSheet.type = 'text/css';
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
  }
  