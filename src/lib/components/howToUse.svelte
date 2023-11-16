<h2>How to use the site :D</h2>
<section>
  <div>
    <h3>Step 1</h3>
    <p>Think about why the bus wasn't there</p>
    <img src="thinkingFace.png" alt="Emoji thinking face">
  </div>
  <div>
    <h3>Step 2</h3>
    <p>Fill out the super easy and simple form :3</p>
    <img src="formFilling.png" alt="Form options being filled in">
  </div>
  <div>
    <h3>Step 3</h3>
    <p>Click the nice "Generate apology" button to automatically generate your apology and send it to the person.</p>
    <img src="yippee.jpg" alt="Generate apology button">
  </div>
</section>

<style>
  h2 {
    text-align: center;
    margin: 20px 0;
  }

  section {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    justify-content: center;
    margin: 0 2rem;
  }

  @media only screen and (max-width: 500px) {
    section {
      grid-template-columns: none;
      grid-template-rows: auto;
    }
  }

  div {
    max-height: 300px;
    outline: 1px solid #333;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
  }

  h3 {
    font-size: 1.8rem;
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 15px;
    font-size: 1.4rem;
  }

  img {
    max-width: 100%;
    max-height: 175px;
    object-fit: cover;
    border-radius: 8px;
  }
</style>