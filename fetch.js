(function ($) {
    /**
     * Fetches given file contents from github.
     * 
     * @param user String name of the user
     * @param repo String repository of the user above
     * @return String contents of the file
     */
    $.fn.githubFetchFile = function (username, reponame, filename) {
        var $this = $(this);
        var user = new Gh3.User(username);
        var repo = new Gh4.Repository(reponame, user);
        repo.fetchBranches(function (error, response) {
            var master = repo.getBranchByName("master");
            master.fetchContents(function (error, response) {
                var file = master.getFileByName(filename);
                file.fetchContents(function (error, response) {
                    $this.text(file.getRawContent());
                });
            });
        });
    }
})(jQuery);