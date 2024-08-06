<script>
  // Event page
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';

  /**
   * @type {any[]}
   */
  let events = [];

  onMount(async () => {
      const res = await fetch('http://localhost:3001/api/events');
      events = await res.json();
  });

  function navigateToNewEvent() {
      goto('/events/new');
  }
</script>
<h1 class="mb-4">Daily Event</h1>
<div class="container mt-5">
  <button class="btn btn-primary mb-3" on:click={navigateToNewEvent}>Add Event</button>
  <table class="table table-striped">
      <thead class="thead-dark">
          <tr>
              <th>Event Type</th>
              <th>Location</th>
              <th>Description</th>
          </tr>
      </thead>
      <tbody>
          {#each events as event}
              <tr>
                  <td>{event.type}</td>
                  <td>{event.location}</td>
                  <td>{event.description}</td>
              </tr>
          {/each}
      </tbody>
  </table>
</div>

<style>
  @import 'bootstrap/dist/css/bootstrap.min.css';
  .container {
      max-width: 800px;
      margin: auto;
  }
</style>
