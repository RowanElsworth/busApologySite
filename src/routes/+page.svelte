<script lang=ts>
  import { enhance } from "$app/forms";

  import Usage from "$lib/components/howToUse.svelte";

  const busIssues = [
    { value: 'mechanical issues', label: 'Mechanical issue' },
    { value: 'The bus running late', label: 'Running late' },
    { value: 'Awful traffic', label: 'Traffic delay' },
    { value: 'The bus just not showing', label: 'Just didn\'t show?' },
    { value: 'Issues', label: 'Other' },
  ];

  const latenessOptions = [
    { value: '5 Minutes', label: '5 minutes' },
    { value: '10 Minutes', label: '10 minutes' },
    { value: '15 Minutes', label: '15 minutes' },
    { value: '30 Minutes', label: '30 minutes' },
    { value: 'more than 30 minutes', label: 'More than 30 minutes' },
    { value: 'false', label: 'Not coming hehe :3' },
  ];
  
  const hopper = [
    { value: 'true', label: 'Yes :(' },
    { value: 'false', label: 'No' },
  ];

</script>

<svelte:head>
  <title>Home | busLateSiteIApologiseSite</title>
</svelte:head>

<main>
  <h1>Welcome to the busLateSiteIApologiseSite!</h1>
  <p>The site you need if your bus is late!</p>

  <section>
    <form method="POST" use:enhance>
      <label for="">What's wrong with the bus?
        <select name="reason" id="reason" required>
          <option value="" selected disabled>Select an option</option>
          {#each busIssues as x}
            <option value={x.value}>{x.label}</option>
          {/each}
        </select>
      </label>
  
      <label for="">How late might you be?
        <select name="delay" id="delay" required>
          <option value="" selected disabled>Select an option</option>
          {#each latenessOptions as x}
            <option value={x.value}>{x.label}</option>
          {/each}
        </select>
      </label>
  
      <label for="">Hopper Bus?
        <select name="hopper" id="hopper" required>
          <option selected disabled>Select an option</option>
          {#each hopper as x}
            <option value={x.value}>{x.label}</option>
          {/each}
        </select>
      </label>

      <label for="">Your name
        <input name="uName" type="text" required>
      </label>

      <label for="">Their name
        <input name="rName" type="text" required>
      </label>

      <label for="">Nya?
        <input name="nya" type="checkbox">
      </label>
  
      <button type="submit">Generate apology :D</button>
    </form>
  </section>
  <Usage />
</main>

<style>
  main {
    width: 100%;
    height: calc(100vh - 70px);
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  
  section {
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  form {
    outline: 1px solid #333;
    width: 50%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    background-color: #f8f8f8;
    border-radius: 1rem;
  }
  
  label {
    font-size: 1.2rem;
    font-weight: 1.2rem;
    margin-bottom: 10px;
  }
  
  select, button {
    margin-top: 5px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
  }

  input[type=text] {
    padding: 0.2rem;
    font-size: 1.2rem;
  }
  
  button {
    cursor: pointer;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 10px;
    font-size: 16px;
  }
  
  @media only screen and (max-width: 500px) {
    main {
      display: block;
    }

    form {
      width: 95%;
    }
  }
</style>