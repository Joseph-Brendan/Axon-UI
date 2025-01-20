#Contribution Guideline

The contribution will be a PULL REQUEST

<pre>##STEP 1: Check the ISSUE tab on the GitHub repo to find an issue to work on </pre>

<pre>##STEP 2: FORK the repo URL from your GitHub account - https://github.com/Joseph-Brendan/Axon-UI</pre>

<pre>##STEP 3: CLONE the forked repo to your local machine using the following command - 
    `git clone https://github.com/<your-github-username>/Axon-UI.git`</pre>

<pre>##STEP 4: Sync the fork to avoid merge conflict by using the following command - 
    ```
    
    git remote add upstream https://github.com/Joseph-Brendan/Axon-UI

    git fetch upstream

    git pull upstream main
    ```
</pre>

<pre>
##STEP 5: Create a new branch with component name using the following command 
    
    `git checkout -b <component-group/component-name>`. 
    
    Example: git checkout -b basic-component/button 
</pre>

<pre>
 ##STEP 6: Write your code in the appropriate component folder   
</pre>

<pre>
##STEP 7: Add and commit changes made to your branch using the following command

    git add . 
    
    git commit -m "short description of changes made" 
    
    Example 1: git commit -m "changed the color of the button"

    Example 2: - git commit -m "created form component/date picker" 
</pre>

<pre>
##STEP 8: Push the changes to the forked repo using the following command
    
    `git push origin <branch-name>`
</pre>
    
<pre>
##STEP 9: Submit a PULL REQUEST against the master branch and wait for the code to be reviewed and merged.

If you're not used to this workflow with git, you can start with some basic [docs from GitHub](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo)
</pre>


#MAKING A PULL REQUEST (WITH SCREENSHOTS)

