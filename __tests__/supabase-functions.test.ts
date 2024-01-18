// TO-DO where to continue off tomorrow: go to chatgpt and continue adding unit tests for the supabaseFunctions and then run jest and try to get it running

import {
  createGuessCyrillicLetterParamOption,
  getGuessCyrillicLetterParamOption,
  updateGuessCyrillicLetterParamOption,
  deleteGuessCyrillicLetterParamOption,
  getAllGuessCyrillicLetterParamOptions,
  createGuessCyrillicLetterParam,
  getGuessCyrillicLetterParam,
  updateGuessCyrillicLetterParam,
  deleteGuessCyrillicLetterParam,
  getAllGuessCyrillicLetterParams,
  createImageSelectParamOption,
  getImageSelectParamOption,
  updateImageSelectParamOption,
  deleteImageSelectParamOption,
  getAllImageSelectParamOptions,
  createImageSelectParam,
  getImageSelectParam,
  updateImageSelectParam,
  deleteImageSelectParam,
  getAllImageSelectParams,
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
  getLevelStep,
  updateLevelStep,
  deleteLevelStep,
  createLevelStep,
  getAllLevelSteps,
  deleteCompletedLevel,
  createCompletedLevel,
  getCompletedLevel,
  updateCompletedLevel,
  getAllCompletedLevels,
  createTextCompletionParam,
  getTextCompletionParam,
  updateTextCompletionParam,
  deleteTextCompletionParam,
  getAllTextCompletionParams,
  createTranslateSentenceParamOption,
  getTranslateSentenceParamOption,
  updateTranslateSentenceParamOption,
  deleteTranslateSentenceParamOption,
  getAllTranslateSentenceParamOptions,
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

describe('Level_step CRUD functions', () => {
  let createdLevelStepId: number;

  afterAll(async () => {
    if (createdLevelStepId) {
      await deleteLevelStep(createdLevelStepId);
    }
  });

  // Test createLevelStep function
  test('createLevelStep - creates a new level step', async () => {
    const newLevelStepData: Level_step = {
      order: 1,
      component: 'Test Component',
      // Add other properties based on your data structure
      level_id: 1,
    };

    const createdLevelStep = await createLevelStep(newLevelStepData);
    if ("id" in createdLevelStep) createdLevelStepId = createdLevelStep.id!;

    // Ensure the returned data has the expected properties
    expect(createdLevelStep).toHaveProperty('id');
    // Add other expected properties here based on your data structure
  });

  // Test getLevelStep function
  test('getLevelStep - retrieves a level step by ID', async () => {
    const retrievedLevelStep = await getLevelStep(createdLevelStepId);

    // Ensure the retrieved level step matches the created level step
    expect(retrievedLevelStep).toEqual(expect.objectContaining({ id: createdLevelStepId }));
  });

  // Test updateLevelStep function
  test('updateLevelStep - updates an existing level step', async () => {
    const updatedLevelStepData: Level_step = {
      order: 2,
      component: 'Updated Test Component',
      // Add other properties for updating the level step
    };

    const updatedLevelStep = await updateLevelStep(createdLevelStepId, updatedLevelStepData);

    // Ensure the returned data has the expected properties after update
    expect(updatedLevelStep).toHaveProperty('order', updatedLevelStepData.order);

    // Check if the updated data is reflected in the retrieved level step
    const retrievedLevelStep = await getLevelStep(createdLevelStepId);
    expect(retrievedLevelStep).toEqual(expect.objectContaining(updatedLevelStepData));
  });

  // Test deleteLevelStep function
  test('deleteLevelStep - deletes an existing level step', async () => {
    // Delete the level step created for testing
    const deletedLevelStep = await deleteLevelStep(createdLevelStepId);
    expect(deletedLevelStep).toHaveProperty('id', createdLevelStepId);
  });

  // Test getAllLevelSteps function
  test('getAllLevelSteps - retrieves all level steps', async () => {
    // Ensure the function returns an array
    const allLevelSteps = await getAllLevelSteps();
    expect(Array.isArray(allLevelSteps)).toBe(true);
  });
});

describe('Completed_level CRUD functions', () => {
  let createdCompletedLevelId: number;

  afterAll(async () => {
    if (createdCompletedLevelId) {
      await deleteCompletedLevel(createdCompletedLevelId);
    }
  });

  // Test createCompletedLevel function
  test('createCompletedLevel - creates a new completed level', async () => {
    // Assuming you have valid level and user IDs
    const levelId = 1; // Replace with a valid level ID
    const userId = '773a97d9-6939-4672-92f7-459a53580e33'; // Replace with a valid user ID

    const newCompletedLevelData: Completed_level = {
      completed_level_id: levelId,
      user_id: userId,
      // Add other properties based on your data structure
    };

    const createdCompletedLevel = await createCompletedLevel(newCompletedLevelData);

    if ("id" in createdCompletedLevel) createdCompletedLevelId = createdCompletedLevel.id!;

    // Ensure the returned data has the expected properties
    expect(createdCompletedLevel).toHaveProperty('id');
    // Add other expected properties here based on your data structure
  });

  // Test getCompletedLevel function
  test('getCompletedLevel - retrieves a completed level by ID', async () => {
    const retrievedCompletedLevel = await getCompletedLevel(createdCompletedLevelId);

    // Ensure the retrieved completed level matches the created completed level
    expect(retrievedCompletedLevel).toEqual(expect.objectContaining({ id: createdCompletedLevelId }));
  });

  // Test updateCompletedLevel function
  test('updateCompletedLevel - updates an existing completed level', async () => {
    const updatedCompletedLevelData: Completed_level = {
      // Add properties for updating the completed level
    };

    const updatedCompletedLevel = await updateCompletedLevel(createdCompletedLevelId, updatedCompletedLevelData);

    // Ensure the returned data has the expected properties after update
    // Add assertions based on your data structure
  });

  // Test deleteCompletedLevel function
  test('deleteCompletedLevel - deletes an existing completed level', async () => {
    // Delete the completed level created for testing
    const deletedCompletedLevel = await deleteCompletedLevel(createdCompletedLevelId);
    expect(deletedCompletedLevel).toHaveProperty('id', createdCompletedLevelId);
  });

  // Test getAllCompletedLevels function
  test('getAllCompletedLevels - retrieves all completed levels', async () => {
    // Ensure the function returns an array
    const allCompletedLevels = await getAllCompletedLevels();
    expect(Array.isArray(allCompletedLevels)).toBe(true);
  });
});

describe('Text_completion_param CRUD functions', () => {
  let createdTextCompletionParamId: number;

  afterAll(async () => {
    if (createdTextCompletionParamId) {
      await deleteTextCompletionParam(createdTextCompletionParamId);
    }
  });

  // Test createTextCompletionParam function
  test('createTextCompletionParam - creates a new text completion parameter', async () => {
    // Assuming you have a valid level step ID
    const levelStepId = 6; // Replace with a valid level step ID

    const newTextCompletionParamData: Text_completion_param = {
      level_step_id: levelStepId,
      title: 'Test Title',
      title_translated: 'Test Translated Title',
      // Add other properties based on your data structure
    };

    const createdTextCompletionParam = await createTextCompletionParam(newTextCompletionParamData);

    if ("id" in createdTextCompletionParam) createdTextCompletionParamId = createdTextCompletionParam.id!;

    // Ensure the returned data has the expected properties
    expect(createdTextCompletionParam).toHaveProperty('id');
    // Add other expected properties here based on your data structure
  });

  // Test getTextCompletionParam function
  test('getTextCompletionParam - retrieves a text completion parameter by ID', async () => {
    const retrievedTextCompletionParam = await getTextCompletionParam(createdTextCompletionParamId);

    // Ensure the retrieved text completion parameter matches the created text completion parameter
    expect(retrievedTextCompletionParam).toEqual(expect.objectContaining({ id: createdTextCompletionParamId }));
  });

  // Test updateTextCompletionParam function
  test('updateTextCompletionParam - updates an existing text completion parameter', async () => {
    const updatedTextCompletionParamData: Text_completion_param = {
      title: 'Updated Title',
      title_translated: 'Updated Translated Title',
    };

    const updatedTextCompletionParam = await updateTextCompletionParam(
      createdTextCompletionParamId,
      updatedTextCompletionParamData
    );

    // Ensure the returned data has the expected properties after update
    // Add assertions based on your data structure
  });

  // Test deleteTextCompletionParam function
  test('deleteTextCompletionParam - deletes an existing text completion parameter', async () => {
    // Delete the text completion parameter created for testing
    const deletedTextCompletionParam = await deleteTextCompletionParam(createdTextCompletionParamId);
    expect(deletedTextCompletionParam).toHaveProperty('id', createdTextCompletionParamId);
  });

  // Test getAllTextCompletionParams function
  test('getAllTextCompletionParams - retrieves all text completion parameters', async () => {
    // Ensure the function returns an array
    const allTextCompletionParams = await getAllTextCompletionParams();
    expect(Array.isArray(allTextCompletionParams)).toBe(true);
  });
});

describe('Translate_sentence_param_option CRUD functions', () => {
  let createdTranslateSentenceParamOptionId: number;

  afterAll(async () => {
    if (createdTranslateSentenceParamOptionId) {
      await deleteTranslateSentenceParamOption(createdTranslateSentenceParamOptionId);
    }
  });

  // Assuming you have a valid translate sentence param ID
  const translateSentenceParamId = 1; // Replace with a valid translate sentence param ID

  // Test createTranslateSentenceParamOption function
  test('createTranslateSentenceParamOption - creates a new translate sentence parameter option', async () => {
    const newTranslateSentenceParamOptionData: Translate_sentence_param_option = {
      translate_sentence_params_id: translateSentenceParamId,
      text: 'Test Option',
      is_correct: true,
      // Add other properties based on your data structure
    };

    const createdTranslateSentenceParamOption = await createTranslateSentenceParamOption(newTranslateSentenceParamOptionData);

    if ("id" in createdTranslateSentenceParamOption) {
      createdTranslateSentenceParamOptionId = createdTranslateSentenceParamOption.id!;
    }

    // Ensure the returned data has the expected properties
    expect(createdTranslateSentenceParamOption).toHaveProperty('id');
    // Add other expected properties here based on your data structure
  });

  // Test getTranslateSentenceParamOption function
  test('getTranslateSentenceParamOption - retrieves a translate sentence parameter option by ID', async () => {
    const retrievedTranslateSentenceParamOption = await getTranslateSentenceParamOption(createdTranslateSentenceParamOptionId);

    // Ensure the retrieved translate sentence parameter option matches the created translate sentence parameter option
    expect(retrievedTranslateSentenceParamOption).toEqual(
      expect.objectContaining({ id: createdTranslateSentenceParamOptionId })
    );
  });

  // Test updateTranslateSentenceParamOption function
  test('updateTranslateSentenceParamOption - updates an existing translate sentence parameter option', async () => {
    const updatedTranslateSentenceParamOptionData: Translate_sentence_param_option = {
      is_correct: true,
      text: 'Updated Option',
    };

    const updatedTranslateSentenceParamOption = await updateTranslateSentenceParamOption(
      createdTranslateSentenceParamOptionId,
      updatedTranslateSentenceParamOptionData
    );

    // Ensure the returned data has the expected properties after update
    // Add assertions based on your data structure
  });

  // Test deleteTranslateSentenceParamOption function
  test('deleteTranslateSentenceParamOption - deletes an existing translate sentence parameter option', async () => {
    // Delete the translate sentence parameter option created for testing
    const deletedTranslateSentenceParamOption = await deleteTranslateSentenceParamOption(createdTranslateSentenceParamOptionId);
    expect(deletedTranslateSentenceParamOption).toHaveProperty('id', createdTranslateSentenceParamOptionId);
  });

  // Test getAllTranslateSentenceParamOptions function
  test('getAllTranslateSentenceParamOptions - retrieves all translate sentence parameter options', async () => {
    // Ensure the function returns an array
    const allTranslateSentenceParamOptions = await getAllTranslateSentenceParamOptions();
    expect(Array.isArray(allTranslateSentenceParamOptions)).toBe(true);
  });
});

describe('Image_select_param CRUD functions', () => {
  let createdImageSelectParamId: number;

  // Test createImageSelectParam function
  test('createImageSelectParam - creates a new image select parameter', async () => {
    const newParamData: Image_select_param = {
      word: 'Test Word',
      level_step_id: 6, // Adjust based on your data structure
      // Add other properties based on your data structure
    };

    const createdParam = await createImageSelectParam(newParamData);

    if ("id" in createdParam) {
      createdImageSelectParamId = createdParam.id!;
    }

    // Ensure the returned data has the expected properties
    expect(createdParam).toHaveProperty('id');
    // Add other expected properties here based on your data structure
  });

  // Test getImageSelectParam function
  test('getImageSelectParam - retrieves an image select parameter by ID', async () => {
    const retrievedParam = await getImageSelectParam(createdImageSelectParamId);

    // Ensure the retrieved parameter matches the created parameter
    expect(retrievedParam).toEqual(expect.objectContaining({ id: createdImageSelectParamId }));
  });

  // Test updateImageSelectParam function
  test('updateImageSelectParam - updates an existing image select parameter', async () => {
    const updatedParamData: Image_select_param = {
      word: 'Updated Test Word',
      // Add other properties for updating the image select parameter
    };

    const updatedParam = await updateImageSelectParam(createdImageSelectParamId, updatedParamData);

    // Ensure the returned data has the expected properties after update
    expect(updatedParam).toHaveProperty('word', 'Updated Test Word');
    // Add other expected properties here based on your data structure

    // Check if the updated data is reflected in the retrieved parameter
    const retrievedParam = await getImageSelectParam(createdImageSelectParamId);
    expect(retrievedParam).toEqual(expect.objectContaining(updatedParamData));
  });

  // Test deleteImageSelectParam function
  test('deleteImageSelectParam - deletes an existing image select parameter', async () => {
    // Delete the parameter created for testing
    const retrievedParam = await deleteImageSelectParam(createdImageSelectParamId);
    expect(retrievedParam).toHaveProperty("id");
  });

  // Test getAllImageSelectParams function
  test('getAllImageSelectParams - retrieves all image select parameters', async () => {
    // Ensure the function returns an array
    const allParams = await getAllImageSelectParams();
    expect(Array.isArray(allParams)).toBe(true);
  });
});

describe('Image_select_param_option CRUD functions', () => {
  let createdImageSelectParamOptionId: number;

  // Test createImageSelectParamOption function
  test('createImageSelectParamOption - creates a new image select parameter option', async () => {
    const newOptionData: Image_select_param_option = {
      imageURL: 'Test Image URL',
      is_correct: true,
      image_select_params_id: 1, // Adjust based on your data structure
      // Add other properties based on your data structure
    };

    const createdOption = await createImageSelectParamOption(newOptionData);

    if ("id" in createdOption) {
      createdImageSelectParamOptionId = createdOption.id!;
    }

    // Ensure the returned data has the expected properties
    expect(createdOption).toHaveProperty('id');
    // Add other expected properties here based on your data structure
  });

  // Test getImageSelectParamOption function
  test('getImageSelectParamOption - retrieves an image select parameter option by ID', async () => {
    const retrievedOption = await getImageSelectParamOption(createdImageSelectParamOptionId);

    // Ensure the retrieved option matches the created option
    expect(retrievedOption).toEqual(expect.objectContaining({ id: createdImageSelectParamOptionId }));
  });

  // Test updateImageSelectParamOption function
  test('updateImageSelectParamOption - updates an existing image select parameter option', async () => {
    const updatedOptionData: Image_select_param_option = {
      imageURL: 'Updated Test Image URL',
      is_correct: false,
      // Add other properties for updating the image select parameter option
    };

    const updatedOption = await updateImageSelectParamOption(createdImageSelectParamOptionId, updatedOptionData);

    // Ensure the returned data has the expected properties after update
    expect(updatedOption).toHaveProperty('imageURL', 'Updated Test Image URL');
    // Add other expected properties here based on your data structure

    // Check if the updated data is reflected in the retrieved option
    const retrievedOption = await getImageSelectParamOption(createdImageSelectParamOptionId);
    expect(retrievedOption).toEqual(expect.objectContaining(updatedOptionData));
  });

  // Test deleteImageSelectParamOption function
  test('deleteImageSelectParamOption - deletes an existing image select parameter option', async () => {
    // Delete the option created for testing
    const retrievedOption = await deleteImageSelectParamOption(createdImageSelectParamOptionId);
    expect(retrievedOption).toHaveProperty("id");
  });

  // Test getAllImageSelectParamOptions function
  test('getAllImageSelectParamOptions - retrieves all image select parameter options', async () => {
    // Ensure the function returns an array
    const allOptions = await getAllImageSelectParamOptions();
    expect(Array.isArray(allOptions)).toBe(true);
  });
});

describe('Guess_cyrillic_letter_param CRUD functions', () => {
  let createdGuessCyrillicLetterParamId: number;

  // Test createGuessCyrillicLetterParam function
  test('createGuessCyrillicLetterParam - creates a new guess cyrillic letter parameter', async () => {
    const newParamData: Guess_cyrillic_letter_param = {
      cyrillic_letter: 'Т',
      level_step_id: 6,
      // Add other properties based on your data structure
    };

    const createdParam = await createGuessCyrillicLetterParam(newParamData);

    if ("id" in createdParam) {
      createdGuessCyrillicLetterParamId = createdParam.id!;
    }

    // Ensure the returned data has the expected properties
    expect(createdParam).toHaveProperty('id');
    // Add other expected properties here based on your data structure
  });

  // Test getGuessCyrillicLetterParam function
  test('getGuessCyrillicLetterParam - retrieves a guess cyrillic letter parameter by ID', async () => {
    const retrievedParam = await getGuessCyrillicLetterParam(createdGuessCyrillicLetterParamId);

    // Ensure the retrieved parameter matches the created parameter
    expect(retrievedParam).toEqual(expect.objectContaining({ id: createdGuessCyrillicLetterParamId }));
  });

  // Test updateGuessCyrillicLetterParam function
  test('updateGuessCyrillicLetterParam - updates an existing guess cyrillic letter parameter', async () => {
    const updatedParamData: Guess_cyrillic_letter_param = {
      cyrillic_letter: 'У',
      // Add other properties for updating the guess cyrillic letter parameter
    };

    const updatedParam = await updateGuessCyrillicLetterParam(createdGuessCyrillicLetterParamId, updatedParamData);

    // Ensure the returned data has the expected properties after update
    expect(updatedParam).toHaveProperty('cyrillic_letter', 'У');
    // Add other expected properties here based on your data structure

    // Check if the updated data is reflected in the retrieved parameter
    const retrievedParam = await getGuessCyrillicLetterParam(createdGuessCyrillicLetterParamId);
    expect(retrievedParam).toEqual(expect.objectContaining(updatedParamData));
  });

  // Test deleteGuessCyrillicLetterParam function
  test('deleteGuessCyrillicLetterParam - deletes an existing guess cyrillic letter parameter', async () => {
    // Delete the parameter created for testing
    const retrievedParam = await deleteGuessCyrillicLetterParam(createdGuessCyrillicLetterParamId);
    expect(retrievedParam).toHaveProperty("id");
  });

  // Test getAllGuessCyrillicLetterParams function
  test('getAllGuessCyrillicLetterParams - retrieves all guess cyrillic letter parameters', async () => {
    // Ensure the function returns an array
    const allParams = await getAllGuessCyrillicLetterParams();
    expect(Array.isArray(allParams)).toBe(true);
  });
});

describe('Guess_cyrillic_letter_param_option CRUD functions', () => {
  let createdGuessCyrillicLetterParamOptionId: number;

  // Test createGuessCyrillicLetterParamOption function
  test('createGuessCyrillicLetterParamOption - creates a new guess cyrillic letter parameter option', async () => {
    const newOptionData: Guess_cyrillic_letter_param_option = {
      text: 'Т',
      is_correct: true,
      guess_cyrillic_letter_params_id: 1,
      // Add other properties based on your data structure
    };

    const createdOption = await createGuessCyrillicLetterParamOption(newOptionData);

    if ("id" in createdOption) {
      createdGuessCyrillicLetterParamOptionId = createdOption.id!;
    }

    // Ensure the returned data has the expected properties
    expect(createdOption).toHaveProperty('id');
    // Add other expected properties here based on your data structure
  });

  // Test getGuessCyrillicLetterParamOption function
  test('getGuessCyrillicLetterParamOption - retrieves a guess cyrillic letter parameter option by ID', async () => {
    const retrievedOption = await getGuessCyrillicLetterParamOption(createdGuessCyrillicLetterParamOptionId);

    // Ensure the retrieved option matches the created option
    expect(retrievedOption).toEqual(expect.objectContaining({ id: createdGuessCyrillicLetterParamOptionId }));
  });

  // Test updateGuessCyrillicLetterParamOption function
  test('updateGuessCyrillicLetterParamOption - updates an existing guess cyrillic letter parameter option', async () => {
    const updatedOptionData: Guess_cyrillic_letter_param_option = {
      text: 'У',
      is_correct: false,
      // Add other properties for updating the guess cyrillic letter parameter option
    };

    const updatedOption = await updateGuessCyrillicLetterParamOption(
      createdGuessCyrillicLetterParamOptionId,
      updatedOptionData
    );

    // Ensure the returned data has the expected properties after update
    expect(updatedOption).toHaveProperty('text', 'У');
    expect(updatedOption).toHaveProperty('is_correct', false);
    // Add other expected properties here based on your data structure

    // Check if the updated data is reflected in the retrieved option
    const retrievedOption = await getGuessCyrillicLetterParamOption(createdGuessCyrillicLetterParamOptionId);
    expect(retrievedOption).toEqual(expect.objectContaining(updatedOptionData));
  });

  // Test deleteGuessCyrillicLetterParamOption function
  test('deleteGuessCyrillicLetterParamOption - deletes an existing guess cyrillic letter parameter option', async () => {
    // Delete the option created for testing
    const retrievedOption = await deleteGuessCyrillicLetterParamOption(createdGuessCyrillicLetterParamOptionId);
    expect(retrievedOption).toHaveProperty("id");
  });

  // Test getAllGuessCyrillicLetterParamOptions function
  test('getAllGuessCyrillicLetterParamOptions - retrieves all guess cyrillic letter parameter options', async () => {
    // Ensure the function returns an array
    const allOptions = await getAllGuessCyrillicLetterParamOptions();
    expect(Array.isArray(allOptions)).toBe(true);
  });
});

