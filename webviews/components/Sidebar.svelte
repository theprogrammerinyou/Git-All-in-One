<script lang="ts">
</script>

<input type="text" placeholder="Commit Message" />

<button on:click={() => {
  tsvscode.postMessage({type: 'merge', value: "merge"});
}}>Merge</button>

<button on:click={() => {
  tsvscode.postMessage({type: "revertCommit", value: "revert"});
}}>Revert Commit</button>

<button on:click={() => {
  tsvscode.postMessage({type: "push", value: "push"})
}}>Push To Remote</button>

<button on:click={() => {
  tsvscode.postMessage({type: "onInfo", value: "Info Message"})
}}>Info</button>

<button on:click={() => {
  tsvscode.postMessage({type: "onError", value: "Error Message"})
}}>Erro</button>