const emptyFunction = () => {};

export default class RouteAnimation {
    constructor(options = {}) {
        this.linkClass = options.linkClass || '.ajax-transition';
        this.dataContainerId = options.dataContainerId || '#ajax-container';
        this.introAnimationTime = options.introAnimationTime || 1000;
        this.introAnimationFn = options.introAnimationFn || emptyFunction;
        this.outroAnimationFn = options.outroAnimationFn || emptyFunction;
        this.shouldAnimateOnStart = options.shouldAnimateOnStart || false;
        this.registerEvents();
    }
    registerEvents() {
        // Remove event listener first, so they don't pile up
        // Add link click event listener to links with class ajax-transition
        $(this.linkClass).off('click').on ('click', (e) => {
            this.loadNewContent($(e.currentTarget).attr('href'));
            return false;
        });

        // Add back/forward browser buttons event listener.
        $(window).off('popstate').on('popstate', () => {
            this.loadNewContent(location.pathname, true);
        });

        // Outro animation on first page load
        if (this.shouldAnimateOnStart) {
          this.outroAnimationFn();
        }
    }
    loadNewContent(url, byPopstateEvent = false) {
        // Intro animation before page transition
        this.introAnimationFn();

        setTimeout(() => {
            // Scrolling to top and making ajax request after full intro animation(1000ms)
            $(window).scrollTop(0);
            $.get(url, data => {
                // Content replacement for container with class "ajax-container"
                const fetchedData = $(data).find(this.dataContainerId);
                if (fetchedData.length) {
                  $(this.dataContainerId).html(fetchedData.html());
                  // Outro animation after content replacement
                  this.outroAnimationFn();
  
                  if (!byPopstateEvent) {
                      // Add the target page to the window.history
                      // Don't add if the new page was triggered by a 'popstate' event
                      window.history.pushState({
                          path: url
                      }, '', url);
                  }
                } else {
                  console.warn('cannot find destination data container');
                  this.outroAnimationFn();
                }
                
            });
        }, this.introAnimationTime);
    }
}

