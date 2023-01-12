import discord
from discord.ext import commands

bot = commands.Bot(command_prefix='!')

@bot.event
async def on_ready():
    print('Bot is ready.')

@bot.command()
async def create_event(ctx, event_name: str, event_time: str):
    event_channel = bot.get_channel(channel_id)
    event_message = await event_channel.send(f'Event "{event_name}" has been created at {event_time}.')
    await event_message.add_reaction('👍')
    await event_message.add_reaction('👎')

bot.run('your_bot_token_goes_here')
