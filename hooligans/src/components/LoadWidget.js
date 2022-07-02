const LoadWidget = (callback) => {
    const existingScript = document.getElementById('apiFootball');
    

    if(!existingScript) {
        const parent = document.getElementById('holder');
        const script = document.createElement('script');
        script.src = "https://widgets.api-sports.io/2.0.3/widgets.js";

        script.id = 'apiFootball';
        script.type = "module";
        parent?.appendChild(script);

        script.onload = () => {
            if (callback) {
                callback();
            }
        };

        return true;
    }

    if(existingScript && callback) callback();
};

export default LoadWidget;