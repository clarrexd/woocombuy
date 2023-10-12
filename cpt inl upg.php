<?php

function post_type_news()
{
$supports = array(
'title', //Stöd för att kunna ge en titel till inlägget/sidan
'editor', //Ger användaren rätt till editorn för att t.ex. lägga in text
'author', // Ger användaren rätt till att lägga till en author
'thumbnail', // Ger användaren rätt till att lägga till en thumbnail(featured image) till inlägget
'excerpt', // Ger användaren rätt till att hantera excerpts (preview av content, brukar vara X antal ord) som syns innan man går in på det enskilda inlägget
'custom-fields', // ger användaren åtkomst till custom-fields för att kunna lägga till olika fält med värden
'comments',
'revisions',
'post-formats',
);
 
$labels = array(
'name' => _x('News', 'plural'), // Namnet på 
'singular_name' => _x('News', 'singular'),
'menu_name' => _x('News', 'admin menu'),
'name_admin_bar' => _x('News', 'admin bar'),
'add_new' => _x('Add New', 'add new'),
'add_new_item' => __('Add New news'),
'new_item' => __('New news'),
'edit_item' => __('Edit news'),
'view_item' => __('View news'),
'all_items' => __('All news'),
'search_items' => __('Search news'),
'not_found' => __('No news found.'),
);
 
$args = array(
'supports' => $supports, // Vilka "content" delar som ska användas i post-typen
'labels' => $labels, // Namn och text som syns i UI:t
'public' => true, // Om alla användare ska kunna skapa denna post-types
'query_var' => true, // Skapa en query-variabel för post-typen
'rewrite' => array('slug' => 'news'), // Hur man når post-typen (t.ex. som inläggsida) http://localhost/news/
'has_archive' => true, // Ska post-typen ha arkiv-sida? Likt inlägg
'hierarchical' => false, // Ska de behandlas som sidor (true) eller inlägg (false)?
);
 
register_post_type('news', $args);
}
 
add_action('init', 'post_type_news');
?>