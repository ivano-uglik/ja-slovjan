"use server";
import supabase from "@/supabase/supabase-server";

interface Level {
  levelGroup: string;
  title: string;
  description?: string;
  language: string;
  steps: Object[];
}

interface SupabaseError {
  code: string;
  details: string;
  hint: string;
  message: string;
}

const handleError = (name: string, error: SupabaseError) => {
  if (process.env.NEXT_PUBLIC_DEV) {
    console.error(`----------- Error occured at "${name}" -----------`, error)
  }
}

const createLevel = async (user_id: string, level: Level) => {
  // get group_id from the levelGroup string
  const { data: group_data, error: group_error } = await supabase.from("level_groups").select("*").eq("author_user", user_id).eq("name", level.levelGroup).single();
  console.log(group_data)

  if (group_error) handleError("fetching group record", group_error);

  if (group_data) {
    // group exists
    console.log("exists")
  } else {
    console.log("doesn't exist")
    // group doesn't exist, we need to create it first
    await createGroup(user_id, level.levelGroup, level.language);

  }

}

const createGroup = async (user_id: string, name: string, language: string) => {
  const { data: language_data, error: language_error } = await supabase.from("languages").select("*").eq("name", language).single();
  if (language_error) handleError("fetching language record", language_error);

  if (language_data) {
    const { data: group_data, error: group_error } = await supabase.from("level_groups").insert({ name, author_user: user_id, language_id: language_data.id });
    if (group_error) handleError("inserting into level_groups", group_error);

    console.log(group_data)

    // TO-DO continue off here, connect auth_users with users 

  }
}

export {
  createLevel
}