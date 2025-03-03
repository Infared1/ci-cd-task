Feature: File Upload Test

  Scenario: file is successfully uploaded
    Given I am on the 'File Upload' webpage
    When I choose file for upload
    Then User see successful message