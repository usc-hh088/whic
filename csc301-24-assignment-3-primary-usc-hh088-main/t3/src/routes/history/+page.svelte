<script>
    //history page
    import { events } from '$lib/stores';
</script>
<h1 class="mb-4">History Events</h1>
{#if $events.length > 0}
    <ul>
        {#each $events as event}
            <li><a href={`/event/${event.id}`}>{event.description}</a></li>
        {/each}
    </ul>
{:else}
    <p>No events available</p>
{/if}