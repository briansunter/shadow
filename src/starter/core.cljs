(ns starter.core
  (:require [reagent.core :as r]
            ["react-desktop/macOs" :refer (Window TitleBar Text SearchField Toolbar ProgressCircle Text)]))

(def window (r/adapt-react-class Window))
(def title-bar (r/adapt-react-class TitleBar))
(def search-field (r/adapt-react-class SearchField))
(def tool-bar (r/adapt-react-class Toolbar))
(def progress-circle (r/adapt-react-class ProgressCircle))
(def text (r/adapt-react-class Text))

(defn app []
  [window
   [title-bar {:controls true}
    [tool-bar {:height 43 :horizontal-alignment "right"}
     [search-field {:placeholder "Search"
                    :defaultValue ""}]]]
   [progress-circle]
   [text "This is in Clojurescript"]])

(defn stop []
  (js/console.log "Stopping..."))

(defn start []
  (js/console.log "Starting...")
  (r/render [app]
            (.getElementById js/document "app")))

(defn ^:export init []
  (start))
