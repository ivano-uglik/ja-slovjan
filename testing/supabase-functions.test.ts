// TO-DO where to continue off tomorrow: go to chatgpt and continue adding unit tests for the supabaseFunctions and then run jest and try to get it running

import {
  createLanguage,
  getLanguage,
  updateLanguage,
  deleteLanguage,
  getAllLanguages,
  // ... (other functions)
} from "@/supabase/actions";

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
