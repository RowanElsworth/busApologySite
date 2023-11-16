import { redirect } from '@sveltejs/kit';
import { supabase } from '$lib/supabaseClient.js';

export const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    let reason = formData.get('reason');
    let delay = formData.get('delay');
    let hopper = formData.get('hopper');
    let uName = formData.get('uName');
    let rName = formData.get('rName');
    let nya = formData.get('nya');
    let url = await createNewUrl(reason, delay, hopper, uName, rName, nya);
    throw redirect(301, `/${url}`)
  } 
}

async function createNewUrl(r, d, h, uN, rN, ny) {
  let url;

  // Add a column that sets the type of the message in the database
  // rather than generating it client side.
  const { data, error } = await supabase
    .from('pages')
    .insert([
      {
        reason: r,
        delay: d,
        hopper: h,
        userName: uN,
        recipientName: rN,
        nya: ny
      },
    ])
    .select()

  if (error) {
    console.error('Error inserting data:', error);
    return null;
  }

  url = data ? data[0]?.uuid : null;

  return url;
}