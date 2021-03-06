// For any third party dependencies, like jQuery, place them in the lib folder.

// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.
requirejs.config({
  paths: {
    oauth: "vendor/oauth/index",
    octokit: "vendor/octokit/index",
    react: "vendor/react/react",
    marked: "vendor/marked/marked"
  }
});
