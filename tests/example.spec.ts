import { test, expect } from '@playwright/test';

test('Simple Get Request', async ({ request }) => {
  const response = await request.get('https://conduit-api.bondaracademy.com/api/tags');
  const responseObj = await response.json();
  console.log(responseObj);
  expect(responseObj.tags[0]).toEqual('Test');
  expect(responseObj.tags).toHaveLength(10);
});
