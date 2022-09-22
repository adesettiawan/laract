<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;


/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\News>
 */
class NewsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $title = fake()->sentence();
        $slug = Str::slug($title);

        return [
            'title' => $title,
            'slug' => $slug,
            'category' => fake()->title(),
            'description' => fake()->paragraph(2, true),
            'author' => fake()->name(),
        ];
    }
}
