<script>
  import { goto } from '$app/navigation';

  let type = '';
  let location = '';
  let description = '';

  async function submitForm() {
    const res = await fetch('http://localhost:3001/api/events', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type, location, description }),
    });
    if (res.ok) {
      goto('/events');
    }
  }
</script>
  
<style>
 @import 'bootstrap/dist/css/bootstrap.min.css';
</style>

<div class="container">
  <div>
    <h1 class="mb-4">Add Event</h1>
    <form on:submit|preventDefault={submitForm} class="needs-validation">
        <div class="mb-3">
            <label for="type" class="form-label">Event Type</label>
            <input type="text" id="type" bind:value={type} class="form-control" placeholder="Enter event type" required>
            <div class="invalid-feedback">
                Please provide a valid event type.
            </div>
        </div>
        <div class="mb-3">
            <label for="location" class="form-label">Location</label>
            <input type="text" id="location" bind:value={location} class="form-control" placeholder="Enter event location" required>
            <div class="invalid-feedback">
                Please provide a valid event location.
            </div>
        </div>
        <div class="mb-3">
            <label for="description" class="form-label">Description</label>
            <textarea id="description" bind:value={description} class="form-control" placeholder="Enter event description" required></textarea>
            <div class="invalid-feedback">
                Please provide a valid event description.
            </div>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</div>
