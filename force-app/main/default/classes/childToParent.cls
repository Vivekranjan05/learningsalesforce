public with sharing class childToParent {
    @AuraEnabled
    public static String saveData(String inputData) {
        // Example logic (you can add logic to insert to a custom object, etc.)
        System.debug('Received data: ' + inputData);
        return 'Data received on server: ' + inputData;
    }
}
  