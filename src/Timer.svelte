<script>

    import ProgressBar from "./ProgressBar.svelte";
    import { createEventDispatcher} from "svelte";
    const totalSeconds = 20;
    let secondsLeft = totalSeconds;
    let isRunning = false;
    $:progress = ((totalSeconds - secondsLeft)/ totalSeconds) * 100;

    // <!-- Audio -->
    const dispatch = createEventDispatcher();
    function startTimer(){
        isRunning = true;
        const timer = setInterval(() => {
        secondsLeft -= 1;
        if(secondsLeft == 0){
            clearInterval(timer);
        secondsLeft = totalSeconds;
        isRunning = false;
        dispatch("end");
        }
    }, 1000)
    }


  </script>
  
  <style>
    h2 {
      margin: 0;
    }
    .start {
    background-color: rgb(154, 73, 73);
    width: 33%;
    margin: 10px 0;
  }
  .start[disabled] {
      
    background-color: rgb(194, 194, 194);
    cursor: not-allowed;
  }
  </style>
  <br>
  <div class="flex items-center" bp="grid">
    <h2 class=" text-3xl text-green-900" bp="offset-5@md 4@md 12@sm">Seconds Left: {secondsLeft}</h2>
  </div>
  <h2>{progress}</h2>
  <ProgressBar {progress}/>
<div class="flex justify-center">
  <button 
  id="start" 
  disabled={isRunning} 
  on:click={startTimer} 
  class="start text-white rounded">Start</button>
</div>
<br>