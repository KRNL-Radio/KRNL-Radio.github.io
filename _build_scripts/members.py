"""
Builds the members page (and everyone's individual page)!
"""

import json
from pathlib import Path

def build_individual_page(member):
    """Builds an individual member page."""


def build_group_page(members):
    """Builds the members page (for the entire group)."""

def load_members():
    with Path('members.json').open() as f:
        return json.load(f)