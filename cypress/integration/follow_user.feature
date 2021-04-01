Feature: Follow user

    Scenario: Verify if the user is displayed in the list of followers
        Given I have a user A
        When user A is following user B
        Then user A is displayed in B's follower list

    Scenario: Verify listing followers

        Given I have a user A
        When user A is following user B
        Then user B has at least one follower on his list

    Scenario: Verify if the user is not displayed in the list of followers
    
        Given I have a user A
        When user A is not following user B
        Then user A is not displayed in B's follower list