const assert = require('assert');
Feature('BrowserStack Local Testing');

Scenario('BStack Local Test - Can check tunnel working', async ({ I }) => {
    I.waitForElement('//hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.view.ViewGroup/android.widget.Button', 30);
    I.tap('//hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.view.ViewGroup/android.widget.Button');

    I.waitForElement('//hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.view.ViewGroup/android.widget.TextView', 30);
    const textElement = await I.grabTextFrom('//hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.view.ViewGroup/android.widget.TextView');
    I.assert(textElement.includes('The active connection is wifi'), 'Expected text not found: "The active connection is wifi"');
    I.assert(textElement.includes('Up and running'), 'Expected text not found: "Up and running"');
});
