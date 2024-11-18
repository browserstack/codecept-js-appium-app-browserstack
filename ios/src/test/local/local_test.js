const assert = require('assert');
Feature('BrowserStack Local Testing');

Scenario('BStack Local Test - Can check tunnel working', async ({ I }) => {
    I.waitForElement('//XCUIElementTypeApplication/XCUIElementTypeWindow/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeButton/XCUIElementTypeStaticText', 30);
    I.tap('//XCUIElementTypeApplication/XCUIElementTypeWindow/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeButton/XCUIElementTypeStaticText');

    // Get text from the specified field and assert its content
    const textElement = await I.grabTextFrom('//XCUIElementTypeApplication/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeTextField');
    I.assert(textElement.includes('Up and running'), 'Expected text not found: "Up and running"');
});
