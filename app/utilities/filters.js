/**
 * Filtro para formatear los titulos de los feeds
 * @returns {array}
 */
app.filter("format_title", function () {
    return function (text,title_resume) {
        var puntos = "";
        if (text != null) {
            var out = text.toLowerCase();
            if (out.length > 60 && title_resume) {
                out = out.substring(0, 60);
                puntos = "..."
            }
            return out.substring(0, 1).toUpperCase() + out.substring(1) + puntos;
        }
    }
});