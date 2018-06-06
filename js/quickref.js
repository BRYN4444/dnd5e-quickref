function add_quickref_item(parent, data, type) {
    var icon = data.icon || "perspective-dice-six-faces-one";
    var subtitle = data.subtitle || "";
    var title = data.title || "[no title]";

    var item = document.createElement("div");
    item.className += "item itemsize"
    item.innerHTML =
    '\
    <div class="item-icon iconsize icon-' + icon + '"></div>\
    <div class="item-text-container text">\
        <div class="item-title">' + title + '</div>\
        <div class="item-desc">' + subtitle + '</div>\
    </div>\
    ';

    var style = window.getComputedStyle(parent.parentNode.parentNode);
    var color = style.backgroundColor;

    item.onclick = function () {
        show_modal(data, color, type);
    }

    parent.appendChild(item);
}

function show_modal(data, color, type) {
    var title = data.title || "[no title]";
    var subtitle = data.description || data.subtitle || "";
    var bullets = data.bullets || [];
    var reference = data.reference || "";
    type = type || "";
    color = color || ""

    $("body").addClass("modal-open");
    $("#modal").addClass("modal-visible");
    $("#modal-backdrop").css("height", window.innerHeight + "px");
    $("#modal-container").css("background-color", color).css("border-color", color);
    $("#modal-title").text(title).append("<span class=\"float-right\">" + type + "</span>");
    $("#modal-subtitle").text(subtitle);
    $("#modal-reference").text(reference);

    var bullets_html = bullets.map(function (item) { return "<p class=\"fonstsize\">" + item + "</p>"; }).join("\n<hr>\n");
    $("#modal-bullets").html(bullets_html);
}

function hide_modal() {
    $("body").removeClass("modal-open");
    $("#modal").removeClass("modal-visible");
}

function fill_section(data, parentname, type) {
    var parent = document.getElementById(parentname);
    data.forEach(function (item) {
        add_quickref_item(parent, item, type);
    });
}

function init() {
    fill_section(data_abilities_extra, "abilities-extra", "Abilities & Skills");
    fill_section(data_abilities_str, "abilities-str", "Abilities & Skills");
    fill_section(data_abilities_dex, "abilities-dex", "Abilities & Skills");
    fill_section(data_abilities_con, "abilities-con", "Abilities & Skills");
    fill_section(data_abilities_int, "abilities-int", "Abilities & Skills");
    fill_section(data_abilities_wis, "abilities-wis", "Abilities & Skills");
    fill_section(data_abilities_cha, "abilities-cha", "Abilities & Skills");
    fill_section(data_combat, "combat-start", "Combat");
    fill_section(data_movement, "basic-movement", "Movement");
    fill_section(data_attack, "attack-actions", "Action: Attack");
    fill_section(data_action, "basic-actions", "Action");
    fill_section(data_bonusaction, "basic-bonus-actions", "Bonus action");
    fill_section(data_reaction, "basic-reactions", "Reaction");
    fill_section(data_food, "basic-food", "Food & Drink");
    fill_section(data_selling, "services-selling", "Goods & Services");
    fill_section(data_travel, "services-travel", "Goods & Services");
    fill_section(data_weparm, "services-weparm", "Goods & Services");
    fill_section(data_itemgear, "services-itemgear", "Goods & Services");
    fill_section(data_hire, "services-hire", "Goods & Services");
    fill_section(data_rest, "downtime-rest", "Resting");
    fill_section(data_downtime, "downtime-living", "Downtime");
    fill_section(data_condition, "basic-conditions", "Condition");
    fill_section(data_injury, "basic-injury", "Lingering Injuries");
    fill_section(data_environment_obscurance, "environment-obscurance", "Environmental effects");
    fill_section(data_environment_light, "environment-light", "Environmental effects");
    fill_section(data_environment_vision, "environment-vision", "Environmental effects");
    fill_section(data_environment_cover, "environment-cover", "Environmental effects");
    fill_section(data_environment_terrain, "environment-terrain", "Environmental effects");
    fill_section(data_death, "basic-death", "Death & Prevention");


    var modal = document.getElementById("modal");
    var container = document.getElementById("modal-container");

    modal.addEventListener("click", function () {
        hide_modal();
    }, false);
    container.addEventListener("click", function (ev) { 
    ev.stopPropagation();
    }, false);

}

$(window).load(init);