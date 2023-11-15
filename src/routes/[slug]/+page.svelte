<script lang="ts">
  export let data;

  let { recipientName, reason, delay, userName, hopper, nya, url } = data;

  const messages = {
    makingIt: `
      <p>Hey ${recipientName},</p>
      <p>I'm sorry for the delay in my bus today. ${reason} slowed me down, and I appreciate your patience.</p>
      <p>I will be about ${delay} late. Thanks for understanding!</p>
      <p>Best,<br>${userName}</p>
    `,
    notMakingIt: `
      <p>Hey ${recipientName},</p>
      <p>I'm sorry for the delay in my bus today. ${reason} slowed me down, and I appreciate your patience.</p>
      <p>I will not be able to make it today. Thanks for understanding!</p>
      <p>Best,<br>${userName}</p>
    `,
    makingItHopper: `
      <p>Hey ${recipientName},</p>
      <p>I'm sorry for the delay in my hopper bus today. ${reason} slowed me down, and I appreciate your patience.</p>
      <p>I will be about ${delay} late. Thanks for understanding!</p>
      <p>Best,<br>${userName}</p>
    `,
    notMakingItHopper: `
      <p>Hey ${recipientName},</p>
      <p>I'm sorry for the delay in my hopper bus today. ${reason} slowed me down, and I appreciate your patience.</p>
      <p>I will not be able to make it today. Thanks for understanding!</p>
      <p>Best,<br>${userName}</p>
    `,
    makingItNya: `
      <p>Meow ${recipientName},</p>
      <p>My bus got delayed because of ${reason}, nya! Thanks for your patience, nya.</p>
      <p>I'll be about ${delay} late, nya. Purr-fectly understand if you do too, nya!</p>
      <p>Paw-sitively, ${userName}</p>
    `,
    notMakingItNya: `
      <p>Meow ${recipientName},</p>
      <p>Apawlogies for the delay in my bus today. ${reason} got in my way, nya.</p>
      <p>Regrettably, I won't make it today, nya. Thanks for your understanding!</p>
      <p>Purr-sincerely, ${userName}</p>
    `,
    makingItHopperNya: `
      <p>Meow ${recipientName},</p>
      <p>Sorry for the delay in my hopper bus, nya. ${reason} caused a pause in my paws, nya.</p>
      <p>I'll be about ${delay} late, nya. Appreciate your understanding!</p>
      <p>Paw-sitively, ${userName}</p>
    `,
    notMakingItHopperNya: `
      <p>Meow ${recipientName},</p>
      <p>Apawlogies for the delay in my hopper bus today. ${reason} got in my way, nya.</p>
      <p>Regrettably, I won't make it today, nya. Thanks for your understanding!</p>
      <p>Purr-sincerely, ${userName}</p>
    `,
  };
</script>

<section class="centered">
  <div>
    {#if delay != "false" && hopper == false}
      {#if nya == null}
        <p>{@html messages.makingIt}</p>
      {:else}
        <p>{@html messages.makingItNya}</p>
      {/if}
    {:else if delay == "false" && hopper == false}
      {#if nya == null}
        <p>{@html messages.notMakingIt}</p>
      {:else}
        <p>{@html messages.notMakingItNya}</p>
      {/if}
    {:else if delay != "false" && hopper == true}
      {#if nya == null}
        <p>{@html messages.makingItHopper}</p>
      {:else}
        <p>{@html messages.makingItHopperNya}</p>
      {/if}
    {:else if delay == "false" && hopper == true}
      {#if nya == null}
        <p>{@html messages.notMakingItHopper}</p>
      {:else}
        <p>{@html messages.notMakingItHopperNya}</p>
      {/if}
    {/if}
  </div>
  <div>
    <h2>What to do now? Send the person this link of the page! :)</h2>
    <a href={`/${url}`}>{`https://bus-apology-site.vercel.app/${url}`}</a>
  </div>

</section>


<style>
  p {
    line-height: 1.5;
    font-size: 2rem;
  }

  h2 {
    line-height: 1.5;
    font-size: 2rem;
  }

  a {
    line-height: 1.5;
    font-size: 1.6rem;
  }

  section {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: calc(100vh - 70px);
  }
</style>