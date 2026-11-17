
import { supabase } from '../lib/supabase';

export const getActiveServices = async () => {
  const { data, error } = await supabase
    .from('services')
    .select(`
      id,
      name,
      slug,
      short_description,
      description,
      display_order
    `)
    .eq('is_active', true)
    .order('display_order', { ascending: true });

  if (error) {
    console.error('Error fetching services:', error);
    throw error;
  }

  return data;
};
