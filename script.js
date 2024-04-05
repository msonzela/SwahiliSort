function askQuestion() {
    var question = document.getElementById('questionInput').value;
    
    // Replace this with your logic to get response from SwahiliSort
    var response = getResponse(question);

    // Display response
    document.getElementById('response').innerHTML = response;
}

// Replace this function with your logic to get response from SwahiliSort
function getResponse(question) {
    // Example response
    return "SwahiliSort: Thank you for your question!";
}
