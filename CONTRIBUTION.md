# Contribution Guidelines

Follow these steps to contribute to the Axon-UI project:

---



## STEP 1: Fork the Repository
Fork the repository to your GitHub account:
- Repository URL: [Axon-UI](https://github.com/Joseph-Brendan/Axon-UI)

---

## STEP 2: Clone the Forked Repository
Clone the forked repository to your local machine:
```
git clone https://github.com/your-github-username/Axon-UI.git
```

## STEP 3: Sync the Fork

To avoid merge conflicts, sync your fork with the main repository:
    ```
    
    git remote add upstream https://github.com/Joseph-Brendan/Axon-UI

    git fetch upstream development
 
    git pull upstream development
    ```

## STEP 4: Create a New Branch
    
    ```
    git checkout -b [component-group/component-name]
    ```
    
    ```
    Example: git checkout -b basic-component/button
    ```


## STEP 5: Write Your Code
Write your code in the appropriate component folder.

## STEP 6: Add and Commit Changes
Stage and commit your changes using the following commands:
```
git add .
git commit -m "short description of changes made"
```
```
    Example 1: git commit -m "changed the color of the button"

    Example 2: - git commit -m "created form component/date picker"
```



## STEP 7: Push the Changes
Push your changes to your forked repository:

```
git push origin [branch-name]
```

    
## STEP 8: Submit a Pull Request
Submit a PULL REQUEST against the **development** branch of the original repository and wait for your code to be reviewed and merged.



# How to make a Pull Request 
Watch this [video](https://drive.google.com/file/d/1nE72oVb5hYN4h5ItCUmvqbGmBjjyEVt6/view?usp=drive_link) to see how to make a pull request against the **development branch** of the original repository 





