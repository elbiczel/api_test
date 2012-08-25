(function ($) {
    /**
     * Fetches given file contents from github.
     * 
     * @param user String name of the user
     * @param repo String repository of the user above
     * @param file? String absolute path to file
     * @param commit? String sha, branch name or tag name
     * @return String contents of the file
     */
    $.fn.githubFetchFile = function (user, repo, file, commit) {
        file = typeof file !== "undefined" ? file : "/README.md";
        commit = typeof commit !== "undefined" ? commit : "HEAD";
        return $.get("https://raw.github.com/" + user + "/" + repo + "/" + commit + file);
    }
})(jQuery);