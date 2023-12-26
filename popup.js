// popup.js

// Creating a new group
function createGroup(groupName) {
    chrome.storage.sync.get(['tabGroups'], function (result) {
      const tabGroups = result.tabGroups || [];
      const newGroup = { name: groupName, tabs: [] };
      tabGroups.push(newGroup);
      chrome.storage.sync.set({ tabGroups: tabGroups }, function () {
        // Notify the interface or perform any additional actions upon group creation
        console.log(`Group "${groupName}" created successfully.`);
      });
    });
}

// Editing a group
function editGroup(oldName, newName) {
    chrome.storage.sync.get(['tabGroups'], function (result) {
      const tabGroups = result.tabGroups || [];
      const groupToEdit = tabGroups.find(group => group.name === oldName);
      if (groupToEdit) {
        groupToEdit.name = newName;
        chrome.storage.sync.set({ tabGroups: tabGroups }, function () {
          // Notify the interface or perform any additional actions upon group editing
          console.log(`Group "${oldName}" renamed to "${newName}".`);
        });
      }
    });
}

// Deleting a group
function deleteGroup(groupName) {
    chrome.storage.sync.get(['tabGroups'], function (result) {
      const tabGroups = result.tabGroups || [];
      const updatedGroups = tabGroups.filter(group => group.name !== groupName);
      chrome.storage.sync.set({ tabGroups: updatedGroups }, function () {
        // Notify the interface or perform any additional actions upon group deletion
        console.log(`Group "${groupName}" deleted successfully.`);
      });
    });
}

// Saving tab groups to Chrome storage
function saveTabGroups(tabGroups) {
    chrome.storage.sync.set({ tabGroups: tabGroups }, function () {
      console.log('Tab groups saved successfully.');
    });
}

// Loading tab groups from Chrome storage
function loadTabGroups(callback) {
    chrome.storage.sync.get(['tabGroups'], function (result) {
      const tabGroups = result.tabGroups || [];
      callback(tabGroups);
    });
}
