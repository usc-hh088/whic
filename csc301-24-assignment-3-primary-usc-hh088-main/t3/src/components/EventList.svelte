<script>
    import { onMount } from 'svelte';
    import { Event } from '../lib/Event.js';
  
    /**
   * @type {any[]}
   */
     export let events = [];
  
    /**
   * @type {any[]}
   */
    let eventObjects = [];
  
    onMount(() => {
      eventObjects = events.map(event => new Event(event.type, event.location, event.description));
    });
  </script>
  
  <div class="container">
    <h1>Event List</h1>
    <table class="table">
      <thead>
        <tr>
          <th>Event type</th>
          <th>Location</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {#each eventObjects as event}
          <tr>
            <td>{event.type}</td>
            <td>{event.location}</td>
            <td>{event.description}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
  