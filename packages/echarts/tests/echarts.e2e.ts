/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { expect } from '@playwright/test';
import { regressionTest } from './utils/test';

regressionTest.describe('echarts', () => {
  regressionTest('basic', async ({ page }) => {
    await page.goto('basic.html');

    await expect(page).toHaveScreenshot();
  });

  regressionTest('more colors', async ({ page }) => {
    await page.goto('more-colors.html');

    await expect(page).toHaveScreenshot();
  });
});
