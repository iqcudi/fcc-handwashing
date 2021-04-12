<script>
import Hto from './Hto.svelte'
import Nav from './Nav.svelte'
import Timer from './Timer.svelte'
let audio;
function timerEnds(e){
  audio.play();

}
</script>

<style global lang="postcss">
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    .bx{

}
  </style>
<Nav/>
<Timer on:end={timerEnds}/>
<Hto/>

<!-- svelte-ignore a11y-media-has-caption -->
<audio bind:this={audio}>
  <source src="sound.wav"/>
</audio>