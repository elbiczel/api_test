(function ($) {
    /**
     * Fetches given file contents from github.
     * 
     * @param user String name of the user
     * @param repo String repository of the user above
     * @return String contents of the file
     */
    $.fn.githubFetchFile = function (user, repo, sha) {
        var $this = $(this);
        $.getJSON("https://api.github.com/repos/" + user + "/" + repo + "/git/blobs/" + sha, function (data) {
            $this.html(data.content);
        });
    }
})(jQuery);