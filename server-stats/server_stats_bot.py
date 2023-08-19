import discord
from discord.ext import commands

intents = discord.Intents.default()
intents.members = True  # Enable member-related events

bot = commands.Bot(command_prefix='!', intents=intents)

@bot.event
async def on_ready():
    print(f'Logged in as {bot.user.name}')

@bot.event
async def on_member_join(member):
    channel = member.guild.system_channel
    if channel:
        await channel.send(f'Welcome to the server, {member.mention}!')

@bot.command()
async def membercount(ctx):
    member_count = ctx.guild.member_count
    await ctx.send(f'Total members: {member_count}')

bot.run('YOUR_BOT_TOKEN')
