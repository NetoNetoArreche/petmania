
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xhtbjrlnvwiuhopytuqz.supabase.co';
const supabaseAnonKey = 'sb_publishable_Q91-YWfeEvD5TXDhCFGSfA_QKBnSOQ5';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
