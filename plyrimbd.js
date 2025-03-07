document.addEventListener("DOMContentLoaded", function () {
    const mainElement = document.querySelector(".entry-content, .post, .post-content, .post-body, .dwd-btn");

    if (mainElement) {
        const allLinks = document.querySelectorAll('a[href*="imdb.com/title/"]');

        if (allLinks.length > 0) {
            const imdbUrl = allLinks[0].href;
            const imdbTitleMatch = imdbUrl.match(/title\/(tt\d+)/);

            if (imdbTitleMatch && imdbTitleMatch[1]) {
                const imdbTitle = imdbTitleMatch[1];

                // Iframe wrapper for responsive aspect ratio
                const iframeWrapper = document.createElement("div");
                iframeWrapper.style.position = "relative";
                iframeWrapper.style.width = "100%";
                iframeWrapper.style.maxWidth = "1000px";
                iframeWrapper.style.paddingBottom = "56.25%"; // 16:9 Aspect Ratio
                iframeWrapper.style.height = "0";
                iframeWrapper.style.overflow = "hidden";
                iframeWrapper.style.margin = "auto";

                // Iframe element
                const iframe = document.createElement("iframe");
                iframe.src = `https://iloplint331bhi.com/play/${imdbTitle}`;
                iframe.style.position = "absolute";
                iframe.style.top = "0";
                iframe.style.left = "0";
                iframe.style.width = "100%";
                iframe.style.height = "100%";
                iframe.setAttribute("frameborder", "0");
                iframe.setAttribute("allowfullscreen", "allowfullscreen");

                // Append iframe inside wrapper
                iframeWrapper.appendChild(iframe);
                mainElement.appendChild(iframeWrapper);

            }
        }
    }
});
