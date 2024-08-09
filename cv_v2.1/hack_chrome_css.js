function chrome_hack_css(file){
    if (navigator.userAgent.includes("Chrome")) {
        var head  = document.getElementsByTagName('head')[0];
        var link  = document.createElement('link');
        link.rel  = 'stylesheet';
        link.type = 'text/css';
        link.href = file;
        link.media = 'all';
        head.appendChild(link);
    }
}