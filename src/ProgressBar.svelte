<style>
    .progress-container {
      margin: 20px 0;
    }
    .progress-bar {
      height: 30px;
      background: #DC2424;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #4A569D, #DC2424);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #4A569D, #DC2424); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    }
  </style>
  
<script>
   export let progress = 0;


</script>

  <div bp="grid">
    <div bp="offset-5@md 4@md 12@sm" class="ring ring-red-900 ring-offset-1 ring-offset-red-900 rounded progress-container">
      <div class="progress-bar" style="width: {progress}%;">
        <span class="sr-only">{progress}%</span>
      </div>
    </div>
  </div>