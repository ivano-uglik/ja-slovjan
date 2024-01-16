// TO-DO where to continue off tomorrow: go to chatgpt and continue adding unit tests for the supabaseFunctions and then run jest and try to get it running

import {
  createLanguage,
  getLanguage,
  updateLanguage,
  deleteLanguage,
  getAllLanguages,
  createLevelGroup,
  getLevelGroup,
  updateLevelGroup,
  deleteLevelGroup,
  getAllLevelGroups,
  createLevel,
  getLevel,
  updateLevel,
  deleteLevel,
  getAllLevels,
  // ... (other functions)
} from "../supabase/actions";

import { Level_group, Level, Completed_level, Guess_cyrillic_letter_param, Guess_cyrillic_letter_param_option, Image_select_param, Guess_latin_letter_param, Image_select_param_option, Guess_latin_letter_param_option, Language, Level_step, Text_completion_param, Translate_sentence_param, Translate_sentence_param_option, } from "../supabase/types";

function fail(reason = "fail was called in a test.") {
  throw new Error(reason);
}

describe('Language CRUD functions', () => {

  let createdLanguageId: number | null = null;

  afterAll(async () => {
    if (createdLanguageId) {
      await deleteLanguage(createdLanguageId);
    }
  });

  it('should create a new language', async () => {
    const mockLanguage = { name: 'English' };
    const result = await createLanguage(mockLanguage);
    console.log(result)

    expect(result).toHaveProperty('id');

    if ("id" in result) {
      createdLanguageId = result?.id || null;
    }
  });

  it('should get a language by ID', async () => {
    if (!createdLanguageId) {
      fail('Language ID is not set.');
      return;
    }
    const result = await getLanguage(createdLanguageId);
    expect(result).toHaveProperty('id', createdLanguageId);
  });

  it('should update a language by ID', async () => {
    if (!createdLanguageId) {
      fail('Language ID is not set.');
      return;
    }
    const updates = { name: 'Updated English' };
    const result = await updateLanguage(createdLanguageId, updates);
    expect(result).toHaveProperty('name', updates.name);
  });

  it('should delete a language by ID', async () => {
    if (!createdLanguageId) {
      fail('Language ID is not set.');
      return;
    }
    const result = await deleteLanguage(createdLanguageId);
    expect(result).toHaveProperty('id', createdLanguageId);
    createdLanguageId = null;
  });
});

describe('Level_group CRUD functions', () => {
  let createdGroupId: number;

  // Test createLevelGroup function
  test('createLevelGroup - creates a new level group', async () => {
    const newGroupData: Level_group = {
      name: 'Test Level Group',
      // Add other properties based on your data structure
      author_user: '773a97d9-6939-4672-92f7-459a53580e33',
      is_community: false,
      foreign_language: 'Test Foreign Language',
      native_language: 'Test Native Language',
      language_id: 1,
    };

    const createdGroup = await createLevelGroup(newGroupData);

    if ("id" in createdGroup) {
      createdGroupId = createdGroup.id!;
    }

    // Ensure the returned data has the expected properties
    expect(createdGroup).toHaveProperty('id');
    // Add other expected properties here based on your data structure
  });

  // Test getLevelGroup function
  test('getLevelGroup - retrieves a level group by ID', async () => {
    const retrievedGroup = await getLevelGroup(createdGroupId);

    // Ensure the retrieved group matches the created group
    expect(retrievedGroup).toEqual(expect.objectContaining({ id: createdGroupId }));
  });

  // Test updateLevelGroup function
  test('updateLevelGroup - updates an existing level group', async () => {
    const updatedGroupData: Level_group = {
      name: 'Updated Test Level Group',
      // Add other properties for updating the level group
    };

    const updatedGroup = await updateLevelGroup(createdGroupId, updatedGroupData);

    // Ensure the returned data has the expected properties after update
    expect(updatedGroup).toHaveProperty('name', 'Updated Test Level Group');
    expect(updatedGroup).toHaveProperty('author_user', '773a97d9-6939-4672-92f7-459a53580e33');

    // Check if the updated data is reflected in the retrieved group
    const retrievedGroup = await getLevelGroup(createdGroupId);
    expect(retrievedGroup).toEqual(expect.objectContaining(updatedGroupData));
  });

  // Test deleteLevelGroup function
  test('deleteLevelGroup - deletes an existing level group', async () => {
    // Delete the group created for testing

    const retrievedGroup = await deleteLevelGroup(createdGroupId);
    expect(retrievedGroup).toHaveProperty("id");
  });

  // Test getAllLevelGroups function
  test('getAllLevelGroups - retrieves all level groups', async () => {
    // Ensure the function returns an array
    const allGroups = await getAllLevelGroups();
    expect(Array.isArray(allGroups)).toBe(true);
  });
});

describe('Level CRUD functions', () => {
  let createdLevelId: number;

  afterAll(async () => {
    if (createdLevelId) {
      await deleteLevel(createdLevelId);
    }
  });

  // Test createLevel function
  test('createLevel - creates a new level', async () => {
    const newLevelData: Level = {
      order: 1,
      // Add other properties based on your data structure
      description: 'Test Level Description',
      level_group_id: 1,
    };

    const createdLevel = await createLevel(newLevelData);
    if ("id" in createdLevel) createdLevelId = createdLevel.id!;

    // Ensure the returned data has the expected properties
    expect(createdLevel).toHaveProperty('id');
    // Add other expected properties here based on your data structure
  });

  // Test getLevel function
  test('getLevel - retrieves a level by ID', async () => {
    const retrievedLevel = await getLevel(createdLevelId);

    // Ensure the retrieved level matches the created level
    expect(retrievedLevel).toEqual(expect.objectContaining({ id: createdLevelId }));
  });

  // Test updateLevel function
  test('updateLevel - updates an existing level', async () => {
    const updatedLevelData: Level = {
      order: 2,
      // Add other properties for updating the level
    };

    const updatedLevel = await updateLevel(createdLevelId, updatedLevelData);

    // Ensure the returned data has the expected properties after update
    expect(updatedLevel).toHaveProperty('order', updatedLevelData.order);

    // Check if the updated data is reflected in the retrieved level
    const retrievedLevel = await getLevel(createdLevelId);
    expect(retrievedLevel).toEqual(expect.objectContaining(updatedLevelData));
  });

  // Test deleteLevel function
  test('deleteLevel - deletes an existing level', async () => {
    // Delete the level created for testing
    const deletedLevel = await deleteLevel(createdLevelId);
    expect(deletedLevel).toHaveProperty('id', createdLevelId);
  });

  // Test getAllLevels function
  test('getAllLevels - retrieves all levels', async () => {
    // Ensure the function returns an array
    const allLevels = await getAllLevels();
    expect(Array.isArray(allLevels)).toBe(true);
  });
});

