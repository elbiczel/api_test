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
        var repo = new Gh3.Repository(reponame, user);
        repo.fetchBranches(function (error, response) {
            var master = repo.getBranchByName("master");
            console.log(master);
            master.fetchContents(function (error, response) {
                var file = master.getFileByName(filename);
                file.fetchContent(function (error, response) {
                    console.log(file.getRawContent());
                    $this.text(file.getRawContent());
                });
            });
        });
    }
})(jQuery);