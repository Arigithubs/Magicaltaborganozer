document.addEventListener('DOMContentLoaded', function () {
    // Initial load of groups
    loadTabGroups(renderGroupList);
  
    // Event listener for the "Create Group" button
    document.getElementById('createGroupBtn').addEventListener('click', function () {
      const groupName = document.getElementById('groupNameInput').value.trim();
      if (groupName !== '') {
        createGroup(groupName);
        loadTabGroups(renderGroupList);
        document.getElementById('groupNameInput').value = '';
      }
    });
  
    // Event listener for clicking on a group
    document.getElementById('groupList').addEventListener('click', function (event) {
      if (event.target.tagName === 'LI') {
        const groupName = event.target.textContent.trim();
        // Implement additional functionality when clicking on a group
        console.log(`Clicked on group: ${groupName}`);
      }
  
      if (event.target.classList.contains('delete-group-btn')) {
        const groupName = event.target.parentElement.textContent.trim();
        deleteGroup(groupName);
        loadTabGroups(renderGroupList);
      }
    });
  });
  
  // Function to render the list of groups
  function renderGroupList(tabGroups) {
    const groupList = document.getElementById('groupList');
    groupList.innerHTML = '';
    tabGroups.forEach(group => {
      const listItem = document.createElement('li');
      listItem.textContent = group.name;
  
      const deleteBtn = document.createElement('button');
      deleteBtn.classList.add('delete-group-btn');
      deleteBtn.textContent = 'Delete';
      listItem.appendChild(deleteBtn);
  
      groupList.appendChild(listItem);
    });
  }
  