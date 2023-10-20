var audioRecorder = {
    audioBlobs: [],    
    mediaRecorder: null,    
    streamBeingCaptured: null,
    context:null,
    source:null,
    analyser:null,
    bufferLength:null,
    dataArray:null,
    canvas:null,
    canvasCtx:null,
    draw: function (){
        requestAnimationFrame(audioRecorder.draw);
        audioRecorder.analyser.getFloatTimeDomainData(audioRecorder.dataArray);

        audioRecorder.canvasCtx.fillStyle = "#ffffff";
        audioRecorder.canvasCtx.fillRect(0, 0, audioRecorder.canvas.width, audioRecorder.canvas.height);

        audioRecorder.canvasCtx.lineWidth = 2;
        audioRecorder.canvasCtx.strokeStyle = "rgb(0, 0, 0)";

        audioRecorder.canvasCtx.beginPath();

        var sliceWidth = audioRecorder.canvas.width * 1.0 / audioRecorder.bufferLength;
        var x = 0;

        for (var i = 0; i < audioRecorder.bufferLength; i++) {
        var v = audioRecorder.dataArray[i] * 200.0;
        var y = (v / 2) + 100;

        if (i === 0) {
            audioRecorder.canvasCtx.moveTo(x, y);
        } else {
            audioRecorder.canvasCtx.lineTo(x, y);
        }

        x += sliceWidth;
        }

        audioRecorder.canvasCtx.lineTo(audioRecorder.canvas.width, audioRecorder.canvas.height / 2);
        audioRecorder.canvasCtx.stroke();
    },
    /** Start recording the audio 
     * @returns {Promise} - returns a promise that resolves if audio recording successfully started
     */
    start: function () {
        if (!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia)) {
            return Promise.reject(new Error('mediaDevices API or getUserMedia method is not supported in this browser.'));
        }
        else {
            return navigator.mediaDevices.getUserMedia({ audio: true })
                .then(stream => {                    
                    
                    audioRecorder.context=new AudioContext();
                    audioRecorder.source=audioRecorder.context.createMediaStreamSource(stream);                    
                    
                    audioRecorder.analyser = audioRecorder.context.createAnalyser();
                    
                    audioRecorder.source.connect(audioRecorder.analyser);
                    
                    audioRecorder.bufferLength = audioRecorder.analyser.frequencyBinCount;
                    
                    audioRecorder.dataArray = new Float32Array(audioRecorder.bufferLength);
                    
                    audioRecorder.canvas=document.getElementById("wave-aud");
                    
                    audioRecorder.canvasCtx = audioRecorder.canvas.getContext("2d");
                    
                    audioRecorder.streamBeingCaptured = stream;
                    audioRecorder.mediaRecorder = new MediaRecorder(stream);                    
                    audioRecorder.audioBlobs = [];
                    audioRecorder.mediaRecorder.addEventListener("dataavailable", event => {                        
                        audioRecorder.audioBlobs.push(event.data);
                    });
                    audioRecorder.mediaRecorder.start();
                    this.draw()                    
                });
        }
    },
    /** Stop the started audio recording
     * @returns {Promise} - returns a promise that resolves to the audio as a blob file
     */
    stop: function () {        
        return new Promise(resolve => {
            let mimeType = audioRecorder.mediaRecorder.mimeType;
            audioRecorder.mediaRecorder.addEventListener("stop", () => {
                let audioBlob = new Blob(audioRecorder.audioBlobs, { type: mimeType });                
                resolve(audioBlob);
            });
            audioRecorder.cancel();
        });
    },    
    cancel: function () {        
        audioRecorder.mediaRecorder.stop();
        audioRecorder.stopStream();
        audioRecorder.resetRecordingProperties();
    },
    stopStream: function () {
        audioRecorder.streamBeingCaptured.getTracks()
            .forEach(track => track.stop());
    },    
    resetRecordingProperties: function () {
        audioRecorder.mediaRecorder = null;
        audioRecorder.streamBeingCaptured = null;        
    },
    pause: function() {
        return new Promise(resolve => {
            let mimeType = audioRecorder.mediaRecorder.mimeType;
            audioRecorder.mediaRecorder.addEventListener("pause", () => {
                let audioBlob = new Blob(audioRecorder.audioBlobs, { type: mimeType });                
                resolve(audioBlob);
            });
            audioRecorder.mediaRecorder.requestData()
            audioRecorder.mediaRecorder.pause()
        });        
    },
    resume:function(){
        audioRecorder.mediaRecorder.resume()
    }
}