import { supabase } from '$lib/supabaseClient.js';

export async function load({ params }) {
  let url = params.slug;

  let { data, error } = await supabase
    .from('pages')
    .select('*')
    .eq('uuid', url)

  if (error) {
    console.error('Error inserting data:', error);
    return null;
  }

  data = data[0]
  console.log(data)

  return {
    reason: data?.reason,
    delay: data?.delay,
    userName: data?.userName,
    recipientName: data?.recipientName,
    hopper: data?.hopper,
    nya: data?.nya,
    url: url
  }
}